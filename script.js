let add = document.querySelector('#btn');
let container = document.querySelector('.user-comment');
add.addEventListener('click', (h) => {
    const username = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
 
    if (username.trim() == "" || username.trim() == null && comment.trim()=="" || comment.trim() == null){
        alert("Please enter the username and comment");
        return false;      
    }
             
    else
        document.getElementById("name").value = "";
        document.getElementById("comment").value ="";
        container.innerHTML += `
        <div class="comment-details">
        <div class="len">
            <div class="user">
                <i class="bi bi-person-circle"></i>
                <h2>${username}</h2>
            </div>
           
            <h3>${comment}</h3>
            <div class="like">
                <div class="l">
                    
                    <i class="bi bi-hand-thumbs-up likes"  ></i>
                    <i class="bi bi-hand-thumbs-down dislike"></i> 
                </div>  
            </div>
        </div>
            <i class="bi bi-trash del"></i>
        </div>`
        let del=document.getElementsByClassName('del');

        for(let i=0; i<del.length; i++)
        {
            del[i].onclick=function(){
                if(confirm('Are you sure you want to delete')){
                    var div = this.parentNode;
                    div.style.display = "none";
                }
                
            }
            
        }
        let like=document.getElementsByClassName("likes");
        let dislike=document.getElementsByClassName("dislike");
        
        for(let i=0; i<like.length; i++){
            let count=0;
            like[i].onclick=function(){
               count++;
               let total= document.getElementsByClassName('likess');
                this.innerHTML=count;
            }
        }
        
        for(let i=0; i<dislike.length; i++){
            let dcount=0;
            dislike[i].onclick=function(){
                dcount++;
                this.innerHTML=dcount;
            }
        }
       
});

