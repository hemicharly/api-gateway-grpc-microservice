package main

import (
	"context"
	"google.golang.org/grpc"
	"log"
	"net"
	"strconv"
	pb "./proto"
)

const (
	port = ":50054"
)

type server struct{}

func (s *server) GetAll(ctx context.Context, in *pb.Empty) (*pb.OrdersResponseList, error) {
	var result pb.OrdersResponseList
	return &result, nil
}

func (s *server) Insert(ctx context.Context, ordersRequest *pb.OrdersRequest) (*pb.OrdersResponse, error) {
	var ordersItemsList [] *pb.OrdersItemResponse
	ordersId := "58d6e7ef-add5-41a7-b661-e2685b19hg7e"
	var totalOrders = 0.0
	for index, element := range ordersRequest.OrdersItemRequestList {
		var ordersItems pb.OrdersItemResponse
		ordersItems.Id = strconv.Itoa(index+1)
		ordersItems.OrdersId = ordersId
		ordersItems.ProductsId = element.ProductsId
		ordersItems.Price = element.Price
		ordersItems.Quantity = element.Quantity
		ordersItems.TotalItem = element.Price * float32(element.Quantity)
		totalOrders = float64(float32(totalOrders) + ordersItems.TotalItem)
		ordersItemsList = append(ordersItemsList, &ordersItems)
	}

	return &pb.OrdersResponse{
		Id: ordersId,
		CustomersId: ordersRequest.CustomersId,
		DateOrders:  ordersRequest.DateOrders,
		OrdersItemResponse: ordersItemsList,
		TotalOrders: float32(totalOrders),
	}, nil
}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterOrdersServer(s, &server{})
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
