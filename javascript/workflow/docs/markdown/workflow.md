<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@datashaper/workflow](./workflow.md)

## workflow package

## Classes

|  Class | Description |
|  --- | --- |
|  [BaseNode](./workflow.basenode.md) |  |
|  [BaseVariadicNode](./workflow.basevariadicnode.md) |  |
|  [Codebook](./workflow.codebook.md) |  |
|  [DataPackage](./workflow.datapackage.md) |  |
|  [DataShape](./workflow.datashape.md) |  |
|  [DataTable](./workflow.datatable.md) |  |
|  [DefaultGraph](./workflow.defaultgraph.md) |  |
|  [InputNode](./workflow.inputnode.md) |  |
|  [Named](./workflow.named.md) |  |
|  [ObservableNode](./workflow.observablenode.md) |  |
|  [Observed](./workflow.observed.md) |  |
|  [ParserOptions](./workflow.parseroptions.md) |  |
|  [Resource](./workflow.resource.md) |  |
|  [StepNode](./workflow.stepnode.md) |  |
|  [Workflow](./workflow.workflow.md) |  |
|  [WorkflowSchemaValidator](./workflow.workflowschemavalidator.md) |  |

## Enumerations

|  Enumeration | Description |
|  --- | --- |
|  [NodeInput](./workflow.nodeinput.md) |  |
|  [NodeOutput](./workflow.nodeoutput.md) |  |

## Functions

|  Function | Description |
|  --- | --- |
|  [argsHasOutputColumn(args)](./workflow.argshasoutputcolumn.md) |  |
|  [array(nodes, edges)](./workflow.array.md) |  |
|  [cloneStep(step, columnNames)](./workflow.clonestep.md) |  |
|  [columnTransformVerbs(filter)](./workflow.columntransformverbs.md) | These are steps that specifically operate on an input/output column only. In other words, they do not cause a change in the number of rows in a table, such as an aggregate or filter would, and only replace or add one column. |
|  [createWorkflow(input, tables)](./workflow.createworkflow.md) | <p>This function establishes the reactive processing graph for executing transformation steps.</p><p>A graph is constructed using each step definition as a node. Any table definitions they export are registered into the tableContainer. Any inputs that are defined but not accounted for in the graph will be wired to the TableContainer using the observable pattern.</p> |
|  [fetchFile(url)](./workflow.fetchfile.md) |  |
|  [fetchJson(url)](./workflow.fetchjson.md) |  |
|  [handleMaybeAsync(value, handler)](./workflow.handlemaybeasync.md) |  |
|  [inputNodeFactory(compute)](./workflow.inputnodefactory.md) |  |
|  [isInputColumnListStep(step)](./workflow.isinputcolumnliststep.md) | Indicates whether the supplied step requires multiple input columns. |
|  [isInputColumnRecordStep(step)](./workflow.isinputcolumnrecordstep.md) | Indicates whether the supplied step requires a map of input columns. |
|  [isInputColumnStep(step)](./workflow.isinputcolumnstep.md) | Indicates whether the supplied step requires a single input column. |
|  [isInputKeyValueStep(step)](./workflow.isinputkeyvaluestep.md) | Indicates whether the supplied step requires an input key and value column. |
|  [isInputTableListStep(step)](./workflow.isinputtableliststep.md) | Indicates whether this step requires more than one input table. |
|  [isInputTableStep(step)](./workflow.isinputtablestep.md) | Indicates whether this step requires an input table. |
|  [isNumericInputStep(step)](./workflow.isnumericinputstep.md) | Indicates whether this step can only operate on numeric values. |
|  [isOutputColumnStep(step)](./workflow.isoutputcolumnstep.md) | Indicates whether the supplied step requires a single output column. |
|  [join(id)](./workflow.join.md) |  |
|  [lookup(id)](./workflow.lookup.md) |  |
|  [nextColumnName(name, columnNames)](./workflow.nextcolumnname.md) | Suggests a new column name given the list passed. If the name is used, this will append numbers to the end. e.g. "column" may result in "column 1" or "column 2" if there are collisions |
|  [observableNode(id, source)](./workflow.observablenode.md) |  |
|  [readStep({ verb, args, id, input }, previous)](./workflow.readstep.md) | Factory function to create new verb configs with as many reasonable defaults as possible. |
|  [stepNodeFactory(stepFunction)](./workflow.stepnodefactory.md) |  |
|  [verbs(filter)](./workflow.verbs.md) | Returns all verbs, subject to optional filter. |

## Interfaces

|  Interface | Description |
|  --- | --- |
|  [Graph](./workflow.graph.md) |  |
|  [Node\_2](./workflow.node_2.md) | A graph processing node |
|  [NodeBinding](./workflow.nodebinding.md) | A binding for a value being emitted from a node |
|  [ResourceHandler](./workflow.resourcehandler.md) |  |
|  [SchemaResource](./workflow.schemaresource.md) |  |
|  [Step](./workflow.step.md) |  |
|  [StepInput](./workflow.stepinput.md) |  |

## Variables

|  Variable | Description |
|  --- | --- |
|  [aggregate](./workflow.aggregate.md) |  |
|  [bin](./workflow.bin.md) |  |
|  [binarize](./workflow.binarize.md) |  |
|  [boolean](./workflow.boolean.md) |  |
|  [concat](./workflow.concat.md) |  |
|  [convert](./workflow.convert.md) |  |
|  [dedupe](./workflow.dedupe.md) |  |
|  [derive](./workflow.derive.md) |  |
|  [difference](./workflow.difference.md) |  |
|  [erase](./workflow.erase.md) |  |
|  [fetch\_2](./workflow.fetch_2.md) |  |
|  [fill](./workflow.fill.md) |  |
|  [filter](./workflow.filter.md) |  |
|  [fold](./workflow.fold.md) |  |
|  [groupby](./workflow.groupby.md) |  |
|  [impute](./workflow.impute.md) |  |
|  [intersect](./workflow.intersect.md) |  |
|  [merge](./workflow.merge.md) |  |
|  [onehot](./workflow.onehot.md) |  |
|  [orderby](./workflow.orderby.md) |  |
|  [pivot](./workflow.pivot.md) |  |
|  [recode](./workflow.recode.md) |  |
|  [rename](./workflow.rename.md) |  |
|  [rollup](./workflow.rollup.md) |  |
|  [sample](./workflow.sample.md) |  |
|  [select](./workflow.select.md) |  |
|  [spread](./workflow.spread.md) |  |
|  [unfold](./workflow.unfold.md) |  |
|  [ungroup](./workflow.ungroup.md) |  |
|  [unhot](./workflow.unhot.md) |  |
|  [union](./workflow.union.md) |  |
|  [unorder](./workflow.unorder.md) |  |
|  [unroll](./workflow.unroll.md) |  |
|  [window\_2](./workflow.window_2.md) |  |
|  [WorkflowSchemaInstance](./workflow.workflowschemainstance.md) |  |

## Type Aliases

|  Type Alias | Description |
|  --- | --- |
|  [CopyWithPartial](./workflow.copywithpartial.md) |  |
|  [Handler](./workflow.handler.md) | Function callback for general activity listener. |
|  [HandlerOf](./workflow.handlerof.md) |  |
|  [InputStep](./workflow.inputstep.md) |  |
|  [Maybe](./workflow.maybe.md) |  |
|  [NodeFactory](./workflow.nodefactory.md) |  |
|  [NodeId](./workflow.nodeid.md) |  |
|  [SocketName](./workflow.socketname.md) |  |
|  [StepFunction](./workflow.stepfunction.md) |  |
|  [TableObservable](./workflow.tableobservable.md) | The workflow object manages mutable data for a workflow specification |
|  [Unsubscribe](./workflow.unsubscribe.md) |  |
