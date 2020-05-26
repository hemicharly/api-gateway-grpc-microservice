package main

import (
	register "./controllers"
	"google.golang.org/grpc"
	"log"
	"net"
)

const (
	port = ":50054"
)

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	register.OrdersController(s)
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
