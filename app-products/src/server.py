import sys
import time
import grpc
from concurrent import futures
from controllers.ProductsController import ProductsController


def serverCreate(host='[::]:50053'):
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    ProductsController.register(server)
    server.add_insecure_port(host)
    return server


if __name__ == '__main__':
    port = sys.argv[1] if len(sys.argv) > 1 else 50053
    host = '[::]:%s' % port
    server = serverCreate(host)
    try:
        server.start()
        print('Running Discount service on %s' % host)
        while True:
            time.sleep(1)
    except Exception as e:
        print('[error] %s' % e)
        server.stop(0)
