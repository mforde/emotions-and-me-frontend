.PHONY: all build deploy

collect:
	git checkout master
	git pull

build:
	yarn build

deploy:
	aws s3 sync build/ s3://www.emotionsandme.org
