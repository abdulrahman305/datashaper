<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@datashaper/workflow](./workflow.md) &gt; [Node\_2](./workflow.node_2.md) &gt; [output](./workflow.node_2.output.md)

## Node\_2.output() method

Gets an output socket

<b>Signature:</b>

```typescript
output(name?: SocketName): Observable<Maybe<T>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  name | [SocketName](./workflow.socketname.md) | <i>(Optional)</i> The name of the output socket. If undefined, this will use the implicit default output socket. |

<b>Returns:</b>

Observable&lt;[Maybe](./workflow.maybe.md)<!-- -->&lt;T&gt;&gt;
