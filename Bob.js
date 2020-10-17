function BounceOff(ok1,ok2)
{
  if (ok1.x - ok2.x < ok2.width/2 + ok1.width/2
    && ok2.x - ok1.x < ok2.width/2 + ok1.width/2) {
  ok1.velocityX = ok1.velocityX * (-1);
  ok2.velocityX = ok2.velocityX * (-1);
}
if (ok1.y - ok2.y < ok2.height/2 + ok1.height/2
  && ok2.y - ok1.y < ok2.height/2 + ok1.height/2){
  ok1.velocityY = ok1.velocityY * (-1);
  ok2.velocityY = ok2.velocityY * (-1);
}


}

function isTouching(object1,object2)
{
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
   return true;
}
else {
  return false;
}
  
}