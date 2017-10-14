window.onload=main;

var igview;
var imgs;

function main()
{
    igview=document.querySelector("ig-view");

    getAlbum("HhmyT",(r)=>{
        imgs=[];
        for (var x=0,l=r.data.length;x<l;x++)
        {
            imgs.push(r.data[x].link);
        }

        igview.loadImgs(imgs);
    });
}

/*string url: imgur album tag string thing
  function callback(object response): callback function
    object response: result album*/
function getAlbum(url,callback)
{
    var r=new XMLHttpRequest();
    r.open("GET",`https://api.imgur.com/3/album/${url}/images`);

    r.onreadystatechange=()=>{
        if (r.readyState==4)
        {
            callback(JSON.parse(r.response));
        }
    };

    r.setRequestHeader("Authorization","Client-ID 28bf65f46c4de3c");
    r.send();
}