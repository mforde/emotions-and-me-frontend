import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWebcamStream } from '../actions';

class Webcam extends Component {
    constructor(props) {
        super(props);
        this.state = {initialized: false};

        // This binding is necessary to make `this` work in the callback
        this.button_callback = this.button_callback.bind(this);
    }

    static propTypes = {
        webcamStream: PropTypes.instanceOf(MediaStream).isRequired,
        isFetching: PropTypes.bool.isRequired,
        getWebcamStream: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getWebcamStream();
        if(this.video) {
            this.video.srcObject = this.props.webcamStream;
        }
    }

    componentDidUpdate() {
        if(this.video) {
            const { webcamStream } = this.props;
            this.video.srcObject = webcamStream;
        }
    }

    button_callback() {
        function camvas(ctx, callback) {
            var self = this
            this.ctx = ctx
            this.callback = callback

            // We can't `new Video()` yet, so we'll resort to the vintage
            // "hidden div" hack for dynamic loading.
            var streamContainer = document.createElement('div')
            this.video = document.createElement('video')

            // If we don't do this, the stream will not be played.
            // By the way, the play and pause controls work as usual
            // for streamed videos.
            this.video.setAttribute('autoplay', '1')
            this.video.setAttribute('playsinline', '1') // important for iPhones

            // The video should fill out all of the canvas
            this.video.setAttribute('width', 1)
            this.video.setAttribute('height', 1)

            streamContainer.appendChild(this.video)
            document.body.appendChild(streamContainer)

            // The callback happens when we are starting to stream the video.
            navigator.mediaDevices.getUserMedia({video: true, audio: false}).then(function(stream) {
                // Yay, now our webcam input is treated as a normal video and
                // we can start having fun
                self.video.srcObject = stream
                // Let's start drawing the canvas!
                self.update()
            }, function(err) {
                throw err
            })

            // As soon as we can draw a new frame on the canvas, we call the `draw` function
            // we passed as a parameter.
            this.update = function() {
                var self = this
                var last = Date.now()
                var loop = function() {
                    // For some effects, you might want to know how much time is passed
                    // since the last frame; that's why we pass along a Delta time `dt`
                    // variable (expressed in milliseconds)
                    var dt = Date.now - last
                    self.callback(self.video, dt)
                    last = Date.now()
                    requestAnimationFrame(loop)
                }
                requestAnimationFrame(loop)
            }
        }

        let pico = {}

        pico.unpack_cascade = function(bytes)
        {
            //
            var dview = new DataView(new ArrayBuffer(4));
            /*
                we skip the first 8 bytes of the cascade file
                (cascade version number and some data used during the learning process)
            */
            var p = 8;
            /*
                read the depth (size) of each tree first: a 32-bit signed integer
            */
            dview.setUint8(0, bytes[p+0]);
            dview.setUint8(1, bytes[p+1]);
            dview.setUint8(2, bytes[p+2]);
            dview.setUint8(3, bytes[p+3]);
            var tdepth = dview.getInt32(0, true);
            p = p + 4
            /*
                next, read the number of trees in the cascade: another 32-bit signed integer
            */
            dview.setUint8(0, bytes[p+0]);
            dview.setUint8(1, bytes[p+1]);
            dview.setUint8(2, bytes[p+2]);
            dview.setUint8(3, bytes[p+3]);
            var ntrees = dview.getInt32(0, true);
            p = p + 4
            /*
                read the actual trees and cascade thresholds
            */
            var tcodes = [];
            var tpreds = [];
            var thresh = [];
            for(var t=0; t<ntrees; ++t)
            {
                var i;
                // read the binary tests placed in internal tree nodes
                Array.prototype.push.apply(tcodes, [0, 0, 0, 0]);
                Array.prototype.push.apply(tcodes, bytes.slice(p, p+4*Math.pow(2, tdepth)-4));
                p = p + 4*Math.pow(2, tdepth)-4;
                // read the prediction in the leaf nodes of the tree
                for(i=0; i<Math.pow(2, tdepth); ++i)
                {
                    dview.setUint8(0, bytes[p+0])
                    dview.setUint8(1, bytes[p+1])
                    dview.setUint8(2, bytes[p+2])
                    dview.setUint8(3, bytes[p+3]);
                    tpreds.push(dview.getFloat32(0, true));
                    p = p + 4;
                }
                // read the threshold
                dview.setUint8(0, bytes[p+0])
                dview.setUint8(1, bytes[p+1])
                dview.setUint8(2, bytes[p+2])
                dview.setUint8(3, bytes[p+3]);
                thresh.push(dview.getFloat32(0, true));
                p = p + 4;
            }
            tcodes = new Int8Array(tcodes)
            tpreds = new Float32Array(tpreds)
            thresh = new Float32Array(thresh)
            /*
                construct the classification function from the read data
            */
            function classify_region(r, c, s, pixels, ldim)
            {
                r = 256*r;
                c = 256*c;
                var root = 0;
                var o = 0.0;
                var pow2tdepth = Math.pow(2, tdepth) >> 0; // '>>0' transforms this number to int

                for(var i=0; i<ntrees; ++i)
                {
                    var idx = 1;
                    for(var j=0; j<tdepth; ++j)
                        // we use '>> 8' here to perform an integer division: this seems important for performance
                        idx = 2*idx + (pixels[((r+tcodes[root + 4*idx + 0]*s) >> 8)*ldim+((c+tcodes[root + 4*idx + 1]*s) >> 8)]<=pixels[((r+tcodes[root + 4*idx + 2]*s) >> 8)*ldim+((c+tcodes[root + 4*idx + 3]*s) >> 8)]);

                    o = o + tpreds[pow2tdepth*i + idx-pow2tdepth];

                    if(o<=thresh[i])
                        return -1;

                    root += 4*pow2tdepth;
                }
                return o - thresh[ntrees-1];
            }
            /*
                we're done
            */
            return classify_region;
        }

        pico.run_cascade = function(image, classify_region, params)
        {
            var pixels = image.pixels;
            var nrows = image.nrows;
            var ncols = image.ncols;
            var ldim = image.ldim;

            var shiftfactor = params.shiftfactor;
            var minsize = params.minsize;
            var maxsize = params.maxsize;
            var scalefactor = params.scalefactor;

            var scale = minsize;
            var detections = [];

            while(scale<=maxsize)
            {
                var step = Math.max(shiftfactor*scale, 1) >> 0; // '>>0' transforms this number to int
                var offset = (scale/2 + 1) >> 0;

                for(var r=offset; r<=nrows-offset; r+=step)
                    for(var c=offset; c<=ncols-offset; c+=step)
                    {
                        var q = classify_region(r, c, scale, pixels, ldim);
                        if (q > 0.0)
                            detections.push([r, c, scale, q]);
                    }

                scale = scale*scalefactor;
            }

            return detections;
        }

        pico.cluster_detections = function(dets, iouthreshold)
        {
            /*
                sort detections by their score
            */
            dets = dets.sort(function(a, b) {
                return b[3] - a[3];
            })
            /*
                this helper function calculates the intersection over union for two detections
            */
            function calculate_iou(det1, det2)
            {
                // unpack the position and size of each detection
                var r1=det1[0], c1=det1[1], s1=det1[2];
                var r2=det2[0], c2=det2[1], s2=det2[2];
                // calculate detection overlap in each dimension
                var overr = Math.max(0, Math.min(r1+s1/2, r2+s2/2) - Math.max(r1-s1/2, r2-s2/2));
                var overc = Math.max(0, Math.min(c1+s1/2, c2+s2/2) - Math.max(c1-s1/2, c2-s2/2));
                // calculate and return IoU
                return overr*overc/(s1*s1+s2*s2-overr*overc);
            }
            /*
                do clustering through non-maximum suppression
            */
            var assignments = new Array(dets.length).fill(0);
            var clusters = [];
            for(var i=0; i<dets.length; ++i)
            {
                // is this detection assigned to a cluster?
                if(assignments[i]==0)
                {
                    // it is not:
                    // now we make a cluster out of it and see whether some other detections belong to it
                    var r=0.0, c=0.0, s=0.0, q=0.0, n=0;
                    for(var j=i; j<dets.length; ++j)
                        if(calculate_iou(dets[i], dets[j])>iouthreshold)
                        {
                            assignments[j] = 1;
                            r = r + dets[j][0];
                            c = c + dets[j][1];
                            s = s + dets[j][2];
                            q = q + dets[j][3];
                            n = n + 1;
                        }
                    // make a cluster representative
                    clusters.push([r/n, c/n, s/n, q]);
                }
            }

            return clusters;
        }

        pico.instantiate_detection_memory = function(size)
        {
            /*
                initialize a circular buffer of `size` elements
            */
            var n = 0, memory = [];
            for(var i=0; i<size; ++i)
                memory.push([]);
            /*
                build a function that:
                (1) inserts the current frame's detections into the buffer;
                (2) merges all detections from the last `size` frames and returns them
            */
            function update_memory(dets)
            {
                memory[n] = dets;
                n = (n+1)%memory.length;
                dets = [];
                for(i=0; i<memory.length; ++i)
                    dets = dets.concat(memory[i]);
                //
                return dets;
            }
            /*
                we're done
            */
            return update_memory;
        }


        /*
            (0) check whether we're already running face detection
        */
        if(this.initialized)
            return; // if yes, then do not initialize everything again
        /*
            (1) prepare the pico.js face detector
        */
        var update_memory = pico.instantiate_detection_memory(5); // we will use the detecions of the last 5 frames
        var facefinder_classify_region = function(r, c, s, pixels, ldim) {return -1.0;};
        var cascadeurl = 'https://raw.githubusercontent.com/nenadmarkus/pico/c2e81f9d23cc11d1a612fd21e4f9de0921a5d0d9/rnt/cascades/facefinder';
        fetch(cascadeurl).then(function(response) {
            response.arrayBuffer().then(function(buffer) {
                var bytes = new Int8Array(buffer);
                facefinder_classify_region = pico.unpack_cascade(bytes);
                console.log('* cascade loaded');
            })
        })
        /*
            (2) get the drawing context on the canvas and define a function to transform an RGBA image to grayscale
        */
        var ctx = document.getElementsByTagName('canvas')[0].getContext('2d');
        function rgba_to_grayscale(rgba, nrows, ncols) {
            var gray = new Uint8Array(nrows*ncols);
            for(var r=0; r<nrows; ++r)
                for(var c=0; c<ncols; ++c)
                    // gray = 0.2*red + 0.7*green + 0.1*blue
                    gray[r*ncols + c] = (2*rgba[r*4*ncols+4*c+0]+7*rgba[r*4*ncols+4*c+1]+1*rgba[r*4*ncols+4*c+2])/10;
            return gray;
        }
        /*
            (3) this function is called each time a video frame becomes available
        */
        var processfn = function(video, dt) {
            // render the video frame to the canvas element and extract RGBA pixel data
            ctx.drawImage(video, 0, 0);
            var rgba = ctx.getImageData(0, 0, 640, 480).data;
            // prepare input to `run_cascade`
            let image = {
                "pixels": rgba_to_grayscale(rgba, 1000, 1000),
                "nrows": 1000,
                "ncols": 1000,
                "ldim": 640
            }
            let params = {
                "shiftfactor": 0.1, // move the detection window by 10% of its size
                "minsize": 100,     // minimum size of a face
                "maxsize": 10000000,    // maximum size of a face
                "scalefactor": 1.1  // for multiscale processing: resize the detection window by 10% when moving to the higher scale
            }
            // run the cascade over the frame and cluster the obtained detections
            // dets is an array that contains (r, c, s, q) quadruplets
            // (representing row, column, scale and detection score)
            let dets = pico.run_cascade(image, facefinder_classify_region, params);
            dets = update_memory(dets);
            dets = pico.cluster_detections(dets, 0.2); // set IoU threshold to 0.2
            // draw detections
            for(var i=0; i<dets.length; ++i)
                // check the detection score
                // if it's above the threshold, draw it
                // (the constant 50.0 is empirical: other cascades might require a different one)
                if(dets[i][3]>50.0)
                {
                    ctx.beginPath();
                    ctx.arc(dets[i][1], dets[i][0], dets[i][2]/2, 0, 2*Math.PI, false);
                    ctx.lineWidth = 3;
                    ctx.strokeStyle = 'red';
                    ctx.stroke();
                }
        }
        /*
            (4) instantiate camera handling (see https://github.com/cbrandolino/camvas)
        */
        var mycamvas = new camvas(ctx, processfn);
        /*
            (5) it seems that everything went well
        */
        this.initialized = true;
    }

    render() {
        const { isFetching } = this.props;

        if (isFetching) {
            return "Loading...";
        }

        return (
            <div>
                <div>

                    <section>
                        <h3>pico.js: face detection in JavaScript</h3>
                        <p>If your platform supports the getUserMedia API call, you can try the <b>pico.js</b> real-time face detector.</p>
                        <p>Simply click the button below and allow the page to access your webcam.</p>
                        <p><b>All the processing is done on the client side, i.e., without sending images to a server.</b></p>
                    </section>
                    <hr />
                    <p><input type="button" value="Start real-time face detection" onClick={this.button_callback} /></p>
                    <p><canvas width='1000' height='1000'></canvas></p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state.webcamStream
}

const mapDispatchToProps = {
    getWebcamStream,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Webcam);
