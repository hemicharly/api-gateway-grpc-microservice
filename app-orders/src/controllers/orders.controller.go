package controllers

import (
	pb "../proto"
	"context"
	"google.golang.org/grpc"
	"strconv"
)

type server struct{}

func (s *server) GetAll(ctx context.Context, in *pb.Empty) (*pb.OrdersResponseList, error) {

	var ordersResponseList []*pb.OrdersResponse
	var ordersResponse pb.OrdersResponse

	ordersResponse.Id = "58d6e7ef-add5-41a7-b661-e2685b19hg7e"
	ordersResponse.CustomersId = "7a02caa6-b2c2-451e-8cf9-9e994593afe9"
	ordersResponse.DateOrders = "2020-05-26"

	var ordersItems pb.OrdersItemResponse
	ordersItems.Id = "58d6e7ef-add5-41a7-b661-e2654gfrc6ca"
	ordersItems.OrdersId = ordersResponse.Id
	ordersItems.ProductsId = "48d6e7ef-add5-41a7-b661-e2685b19c6ca"
	ordersItems.Price = 5
	ordersItems.Quantity = 2
	ordersItems.TotalItem = ordersItems.Price * float32(ordersItems.Quantity)

	ordersResponse.OrdersItemResponse = append(ordersResponse.OrdersItemResponse, &ordersItems)

	ordersResponse.TotalOrders = ordersItems.TotalItem

	ordersResponseList = append(ordersResponseList, &ordersResponse)

	return &pb.OrdersResponseList{
		OrdersResponseList: ordersResponseList,
	}, nil
}

func (s *server) Insert(ctx context.Context, ordersRequest *pb.OrdersRequest) (*pb.OrdersResponse, error) {
	var ordersItemsList []*pb.OrdersItemResponse
	ordersId := "58d6e7ef-add5-41a7-b661-e2685b19hg7e"
	var totalOrders = 0.0
	for index, element := range ordersRequest.OrdersItemRequestList {
		var ordersItems pb.OrdersItemResponse
		ordersItems.Id = strconv.Itoa(index + 1)
		ordersItems.OrdersId = ordersId
		ordersItems.ProductsId = element.ProductsId
		ordersItems.Price = element.Price
		ordersItems.Quantity = element.Quantity
		ordersItems.TotalItem = element.Price * float32(element.Quantity)
		totalOrders = float64(float32(totalOrders) + ordersItems.TotalItem)
		ordersItemsList = append(ordersItemsList, &ordersItems)
	}

	return &pb.OrdersResponse{
		Id:                 ordersId,
		CustomersId:        ordersRequest.CustomersId,
		DateOrders:         ordersRequest.DateOrders,
		OrdersItemResponse: ordersItemsList,
		TotalOrders:        float32(totalOrders),
	}, nil
}

func OrdersController(s *grpc.Server) {
	pb.RegisterOrdersServer(s, &server{})
}
