//When you want to setup refreshing on setup container so state is saved
// axios.get('http://localhost:3001' + this.props.history.location.pathname)
//   .then((res)=>{
//     //Getting user IP with call to freegeoip and comparing it with the hosts ip in the db
//     return axios.get('https://freegeoip.net/json/')
//             .then((resIP)=>{
//               if (resIP.data.ip !== res.data.host.ip) {
//                 console.log('IP Addresses do not match!')
//                 //This should redirect you out of this page if its not yours
//                 //This is so you can refresh your setup page
//                 //this.props.history.push('/')
//                 console.log(res.data)
//               } else {
//                 //If you already entered your name
//                   //this.props.setHostType(true)
//                   //this.changeGameTitle(res.data.title)
//                   //this.props.changePlayerName(res.data.host.name)
//                   //this.onSubmitName()
//                   //this.changeSetMarkerRadius(this.props.game.id, res.data.radius)
//                   //this.setMarker(null, res.data.location, res.data.radius)
//                 //If you didn't already enter your name
//                   //this.changeGameTitle(res.data.title)
//                 console.log(res.data)
//               }
//             })
//             .catch((err)=>{
//               console.log(err)
//             })
//   })
//   .catch((err)=>{
//     console.log(err)
//   })
