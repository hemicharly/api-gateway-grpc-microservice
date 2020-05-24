// package: 
// file: users.proto

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

export class UsersInsertRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getAge(): number;
    setAge(value: number): void;

    getAddress(): string;
    setAddress(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsersInsertRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UsersInsertRequest): UsersInsertRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsersInsertRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsersInsertRequest;
    static deserializeBinaryFromReader(message: UsersInsertRequest, reader: jspb.BinaryReader): UsersInsertRequest;
}

export namespace UsersInsertRequest {
    export type AsObject = {
        name: string,
        age: number,
        address: string,
    }
}

export class UsersUpdateRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getAge(): number;
    setAge(value: number): void;

    getAddress(): string;
    setAddress(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsersUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UsersUpdateRequest): UsersUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsersUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsersUpdateRequest;
    static deserializeBinaryFromReader(message: UsersUpdateRequest, reader: jspb.BinaryReader): UsersUpdateRequest;
}

export namespace UsersUpdateRequest {
    export type AsObject = {
        id: string,
        name: string,
        age: number,
        address: string,
    }
}

export class UsersRequestId extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsersRequestId.AsObject;
    static toObject(includeInstance: boolean, msg: UsersRequestId): UsersRequestId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsersRequestId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsersRequestId;
    static deserializeBinaryFromReader(message: UsersRequestId, reader: jspb.BinaryReader): UsersRequestId;
}

export namespace UsersRequestId {
    export type AsObject = {
        id: string,
    }
}

export class UsersResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getAge(): number;
    setAge(value: number): void;

    getAddress(): string;
    setAddress(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UsersResponse): UsersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsersResponse;
    static deserializeBinaryFromReader(message: UsersResponse, reader: jspb.BinaryReader): UsersResponse;
}

export namespace UsersResponse {
    export type AsObject = {
        id: string,
        name: string,
        age: number,
        address: string,
    }
}

export class UsersResponseList extends jspb.Message { 
    clearUsersresponselistList(): void;
    getUsersresponselistList(): Array<UsersResponse>;
    setUsersresponselistList(value: Array<UsersResponse>): void;
    addUsersresponselist(value?: UsersResponse, index?: number): UsersResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsersResponseList.AsObject;
    static toObject(includeInstance: boolean, msg: UsersResponseList): UsersResponseList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsersResponseList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsersResponseList;
    static deserializeBinaryFromReader(message: UsersResponseList, reader: jspb.BinaryReader): UsersResponseList;
}

export namespace UsersResponseList {
    export type AsObject = {
        usersresponselistList: Array<UsersResponse.AsObject>,
    }
}
