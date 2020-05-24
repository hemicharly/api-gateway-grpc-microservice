// package: 
// file: customers.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class CustomersInsertRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getAge(): number;
    setAge(value: number): void;

    getAddress(): string;
    setAddress(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomersInsertRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CustomersInsertRequest): CustomersInsertRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomersInsertRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomersInsertRequest;
    static deserializeBinaryFromReader(message: CustomersInsertRequest, reader: jspb.BinaryReader): CustomersInsertRequest;
}

export namespace CustomersInsertRequest {
    export type AsObject = {
        name: string,
        age: number,
        address: string,
    }
}

export class CustomersUpdateRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getAge(): number;
    setAge(value: number): void;

    getAddress(): string;
    setAddress(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomersUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CustomersUpdateRequest): CustomersUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomersUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomersUpdateRequest;
    static deserializeBinaryFromReader(message: CustomersUpdateRequest, reader: jspb.BinaryReader): CustomersUpdateRequest;
}

export namespace CustomersUpdateRequest {
    export type AsObject = {
        id: string,
        name: string,
        age: number,
        address: string,
    }
}

export class CustomersRequestId extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomersRequestId.AsObject;
    static toObject(includeInstance: boolean, msg: CustomersRequestId): CustomersRequestId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomersRequestId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomersRequestId;
    static deserializeBinaryFromReader(message: CustomersRequestId, reader: jspb.BinaryReader): CustomersRequestId;
}

export namespace CustomersRequestId {
    export type AsObject = {
        id: string,
    }
}

export class CustomersResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getAge(): number;
    setAge(value: number): void;

    getAddress(): string;
    setAddress(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CustomersResponse): CustomersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomersResponse;
    static deserializeBinaryFromReader(message: CustomersResponse, reader: jspb.BinaryReader): CustomersResponse;
}

export namespace CustomersResponse {
    export type AsObject = {
        id: string,
        name: string,
        age: number,
        address: string,
    }
}

export class CustomersResponseList extends jspb.Message { 
    clearCustomersresponselistList(): void;
    getCustomersresponselistList(): Array<CustomersResponse>;
    setCustomersresponselistList(value: Array<CustomersResponse>): void;
    addCustomersresponselist(value?: CustomersResponse, index?: number): CustomersResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomersResponseList.AsObject;
    static toObject(includeInstance: boolean, msg: CustomersResponseList): CustomersResponseList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomersResponseList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomersResponseList;
    static deserializeBinaryFromReader(message: CustomersResponseList, reader: jspb.BinaryReader): CustomersResponseList;
}

export namespace CustomersResponseList {
    export type AsObject = {
        customersresponselistList: Array<CustomersResponse.AsObject>,
    }
}
