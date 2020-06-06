# lifecycle
1 Creation: auto run when call component
    + contructor: define state
    + componentwillmount: remove next version of react(17)
    + render: create ui of application, only ui, not add logic source code to this
    + ComponentDidMount: logic run af first time when run component
    + ComponentWillUnmount: run when component is destroy, end of life component, remove
2 Update
    + ComponentWillReceiveProps(nextProps): run when component update at the first time, remove
    + shouldComponentUpdate(nextProps): make component will re-render or not ?, quyet dinh component co render lai hay khong, dua vao dieu kien 
        + this.props.value === nextProps.value ? false: true, true : re-render, false : not re-render
        + PureComponent extends by component will auto extends shouldComponentUpdate, make component will re-render or not
            + shallow compareration: not compare array[] or object{}, in this case manual write shouldComponentUpdate 
    + componentWillUpdate: remove
    + render
    + ComponentDidUpdate: when update occur at component , this component will call all of component re-run

# React Hook