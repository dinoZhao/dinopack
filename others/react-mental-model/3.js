function NameBox(name) {
  return { fontWeight: 'bold', labelContent: name };
}

function FancyBox(children) {
  return {
    borderStyle: '1px solid blue',
    children: children
  };
}

function FancyNameBox(user, likes, onClick) {
    return FancyBox([
      'Name: ', NameBox(user.firstName + ' ' + user.lastName),
      'Likes: ', likes,
      LikeButton(onClick)
    ]);
  }
  
  // Implementation Details
  
  var likes = 0;
  function addOneMoreLike() {
    likes++;
    render();
  }
  //这里使用定时器模拟交互修改状态
  const LikeButton=(callback)=>{
      if(likes===0){
        setTimeout(callback,3000)
      }
      return 'fakeBtn'
  }
  const render=()=>console.log(FancyNameBox(
    { firstName: 'Sebastian', lastName: 'Markbåge' },
    likes,
    addOneMoreLike
  )) ;
 
  // Init
   render()