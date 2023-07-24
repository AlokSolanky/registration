const blogs = [];

// async function manageBlog(){
//   const blog1 =  await new Promise((res, rej) => {
//     setTimeout(() => {
//       blogs.push({ title: 'blog1' });
//       console.log("blog1 created");
//       res(blogs);
//     },3000);
//   });

//   const blog2 = await new Promise((res, rej) => {
//     setTimeout(() => {
//       blogs.push({ title: "blog2" });
//       console.log('blog2 created');
//       res(blogs);
//     }, 1000);
//   });
//   const blog3 = await new Promise((res, rej) => {
//     setTimeout(() => {
//       blogs.push({ title: "blog3" });
//       console.log("blog3 created");
//       res(blogs);
//     }, 1000);
//   });

//   const del = await new Promise((res, rej) => {
//     if(blogs.length<=0)
//        {
//            rej("ERROR");
//        }
//        else{
//            let bl = blogs[blogs.length-1];
//            console.log('blog deleted');
//            blogs.pop();
//            res(bl);
//        }
//    });
// };

// manageBlog();


// console.log("before");
function createPost(b)
{
    let s = Math.floor(Math.random()*2);
    // let s = 1;
    const post = new Promise((res,rej)=>
    {
        setTimeout(()=>{
            if(s === 1){
            blogs.push({title:b});
            let blog = blogs
            res("created");
            }
            else{
                rej('cannot create');
            }
        },200);
    })
    return post;
}
function deletePost() {
  let s = Math.floor(Math.random() * 2);
  const post = new Promise((res, rej) => {
    setTimeout(() => {
      if (s === 1 && blogs.length>0) {
        blogs.pop();
        res(`deleted`);
      } else {
        rej("ERROR: no more deletes");
      }
    }, 100);
  });
  return post;
}

async function createAndDelete()
{
    try{
    let blog1 = await createPost('blog1');
    console.log(blog1);
    let blog2 = await createPost('blog2');
    console.log(blog2);
    let blog3 = await createPost('blog3');
    console.log(blog3);
    let del = await deletePost();
    console.log(del)
    let del2 = await deletePost();
    console.log(del2);
    }
    catch(err){
        console.log(err);
    }
}

createAndDelete();
// createPost('blog1').then((res)=>
// {
// console.log(res);
// return createPost('blog2');
// }
// ).then((res)=>
// {
//     console.log(res);
//     return createPost('blog3');
// }).then((res)=>
// {
//     console.log(res);
//     return deletePost();
// }).then((res)=>
// {
//     console.log(res);
// })
// .catch((err)=>
// {
//     console.log(err);
// })
// // console.log("after");