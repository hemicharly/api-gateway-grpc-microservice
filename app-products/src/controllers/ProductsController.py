from proto.products import products_pb2_grpc, products_pb2


class ProductsServices(products_pb2_grpc.ProductsServicer):

    def GetAll(self, request, context):
        listProducts = []
        for item in range(10):
            product = products_pb2.ProductsResponse(id=str((item + 1)), name='cpu' + str(item + 1),
                                                    price=((item + 1) * 2))
            listProducts.append(product)
        return products_pb2.ProductsResponseList(productsResponseList=[product for product in listProducts])

    def Get(self, request, context):
        products = products_pb2.ProductsResponse(id=request.id, name='cpu', price=123)
        return products

    def Insert(self, request, context):
        products = products_pb2.ProductsResponse(id='1235', name=request.name, price=request.price)
        return products

    def Update(self, request, context):
        products = products_pb2.ProductsResponse(id=request.id, name=request.name, price=request.price)
        return products

    def Remove(self, request, context):
        print ('Remove product {0}'.format(request.id))
        products = products_pb2.Empty()
        return products


class ProductsController(object):

    @classmethod
    def register(cls, server):
        products_pb2_grpc.add_ProductsServicer_to_server(ProductsServices(), server)
