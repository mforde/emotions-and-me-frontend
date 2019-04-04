.PHONY: all build deploy

all: build deploy

build:
	yarn build

deploy:
	aws s3 sync build/ s3://www.emotionsandme.org
