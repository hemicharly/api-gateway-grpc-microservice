# Execute all application in mode development
dev:
	docker-compose up --build

# Execute grpc-customers application in mode development
dev-grpc-customers:
	docker-compose up --build grpc-customers

# Execute grpc-users application in mode development
dev-grpc-users:
	docker-compose up --build grpc-users

# Execute grpc-products application in mode development
dev-grpc-products:
	docker-compose up --build grpc-products

# Execute grpc-orders application in mode development
dev-grpc-orders:
	docker-compose up --build grpc-orders


####################################################################################
# Execute command lint:fix in gateway api
lint-fix-gateway-api:
	docker-compose exec api-gateway-grcp yarn lint:fix



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