install:
	yarn
	cp .env .env.local
	npx husky install

test:
	yarn test
