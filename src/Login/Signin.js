const signSubmit = (e)=>{
      
axios.get("http://localhost:8080/get?user="+e.user+"&password="+e.password)
.then((response) => {
console.log(setLogged());

});
   
}
export default signSubmit();