import React, { Component } from 'react'
import Zone from '../presentation/Zone'
import superagent from 'superagent'

class Zones extends Component{
  constructor(){
    super()
    this.state={
      zone:{
        name:'',
        zipCode:''
      },
      list:[
        ]
    }
  }
  componentDidMount(){
      console.log('ComponentDidMount');
      superagent
        .get('/api/zone')
        .query(null)
        .set('Accept', 'application/json')
        .end((err, response)=>{
            if(err){
              alert('Error: ' + err )
              return
            }
            //console.log(JSON.stringify(response.body));
            this.setState({
               list:response.body.resource
            })
        })
  }


  updateZonename(event){
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone['name'] = event.target.value
    this.setState({
      zone: updatedZone
    })
  }
  updateZipcode(event){
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone['zipCode'] = event.target.value
    this.setState({
      zone: updatedZone
    })
  }
  submitComment(){
    console.log(this.state.zone);
    let updatedList = Object.assign([], this.state.list)
    updatedList.push(this.state.zone)
    this.setState({
      list: updatedList
    })
    console.log(updatedList);
  }
  render(){
    // const listItems = this.state.list.map(function(zone, i ){
    //
    // })
    const listItems = this.state.list.map((zone, i)=>{
        return (
          <li key={i}><Zone zone= {zone}/></li>
        )
    })

    return (
      <div>
        <ol className="list-group">
          {listItems}
        </ol>
        <input onChange={this.updateZonename.bind(this)} type="text" className="form-control" name="" placeholder="Zonename" /> <br/>
        <input onChange={this.updateZipcode.bind(this)}  type="text" className="form-control" name="" placeholder="Zipcode" /><br/>
        <button onClick={this.submitComment.bind(this)} className="btn btn-danger">Submit Comment</button>
    </div>
    )
  }
}

export default Zones
