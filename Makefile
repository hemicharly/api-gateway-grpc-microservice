# Execute build docker api-gateway-grcp and docker-compose.cli.yml
build:
	docker-compose build api-gateway-grcp &&\
	docker-compose -f docker-compose.cli.yml build --pull

# Execute all application in mode development
dev:
	docker-compose up --build

# Execute grpc-customers application in mode development
dev-grpc-customers:
	docker-compose up --build grpc-customers1 customers2

# Execute grpc-users application in mode development
dev-grpc-users:
	docker-compose up --build grpc-users

# Execute grpc-products application in mode development
dev-grpc-products:
	docker-compose up --build grpc-products

# Execute grpc-orders application in mode development
dev-grpc-orders:
	docker-compose up --build grpc-orders

# Execute api-gateway-grcp application in mode development
dev-api-gateway-grcp:
	docker-compose up --build api-gateway-grcp

# Execute api-gateway-grcp application in mode production
prod-api-gateway-grcp:
	NODE_ENV=production docker-compose up --build api-gateway-grcp

# Execute nginx-grpc application using hostname
nginx-start:
	export HOST_NAME=$(HOST_NAME); \
	docker-compose up --build nginx-grpc

####################################################################################
# Execute command lint:fix in api gateway
lint-fix-api-gateway:
	docker-compose exec api-gateway-grcp yarn lint:fix

####################################################################################
# Execute command tests in api gateway
test-api-gateway-grpc:
	docker-compose exec api-gateway-grcp yarn test

####################################################################################
# Execute command yarn protoc to app-customers
protoc-grpc-customers:
	cd app-customers && yarn protoc

# Execute command yarn protoc to app-users
protoc-grpc-users:
	cd app-users && yarn protoc

# Execute command script/protoc.sh to app-products
protoc-grpc-products:
	app-products/scripts/protoc.sh