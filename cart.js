var updbtns=document.getElementsByClassName('updatecart')
	
for(var i=0;i<updbtns.length;i++){
	updbtns[i].addEventListener('click',function(){
	var prodid=this.dataset.product
	var action=this.dataset.action
	console.log('prodid:', prodid, 'action:', action)
	updateUserOrder(prodid, action)
	})
}
function updateUserOrder(prodid, action){
	var url= '/product.html/'
}