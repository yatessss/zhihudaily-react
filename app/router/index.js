/**
 * Created by yatessss on 16/11/21.
 */


export default (
    <div>
      <Route path="/" component={Login} onLeave={()=>{dispatch(resetState())}}/>
      <Route path="/admin" component={App} />
    </div>
);
