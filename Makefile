install:
	yarn
	cp .env .env.local
	npx husky install

start:
	yarn start

build:
	yarn build

test:
	yarn test
