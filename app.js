//quadratic-take the first letter, if it appears after running indexof.then we move on to the next letter. repeat.
//string with 1,000,000
//for each to all million takes forever




//linear = 1,000,000 + 1,000,000 + 1,000,000 +1,000,000

//first step is to build an object from each letter in string
// ask a question as it being built is this key already here? if so, set the value to fale. If not, set the value as a tuple in the tuple = [index, true];


//for loop if false move on
//if != false, answer is letter if index<lowestIndex,

//return answer || default


function noRepeat(str){
    let arr = str.split('');
    let obj = {};
    let answer;
    let minIndex = arr.length;

    arr.forEach((letter, index) => {
        if (!obj[letter]) {
            obj[letter]=false;
        }
        
        else if(obj[letter]){
            obj[letter]=false;
        }
    });

    for ( let key in obj){
        if (!obj[key]){

        }

        else {
            if
        (obj[key][0]<minIndex){
            answer = key;
            minIndex = obj[key][0]
        }   
        }
    }
    return answer
}

noRepeat(    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur earum tempora nihil quaerat harum velit hic sint odit adipisci porro, temporibus nesciunt voluptas enim sequi fugiat dicta cumque deserunt maiores itaque inventore. Nesciunt enim officia vero nulla veniam ipsam a sapiente excepturi ad beatae expedita natus, velit praesentium sed dolore, consequatur fugit voluptatum nam minus pariatur adipisci quia quas perspiciatis ratione! Repudiandae sint ducimus pariatur in facere, reiciendis vero perferendis voluptatem quibusdam ipsum architecto commodi nobis esse veniam quam sapiente tenetur quos excepturi tempore molestiae laborum voluptates? Autem, similique? Placeat maiores omnis animi consequatur possimus praesentium beatae officia laborum? Debitis nulla quidem architecto. Sint tempore odio laudantium nobis autem laboriosam vel nemo voluptate eligendi nulla, cumque quaerat ducimus ipsa voluptatum! Qui possimus dolore unde nulla maiores, ratione accusamus distinctio animi placeat impedit vel mollitia, ipsa, cumque aut dolor omnis id dignissimos repellat quod eveniet assumenda nobis quam hic delectus? Velit rem sit repellat! Quia soluta temporibus nam, id asperiores laudantium dolore in qui vero, blanditiis quae porro enim sapiente labore ad minima est similique ut consequatur unde reiciendis dolorem. Sequi fuga quo eum recusandae et aperiam, a ab assumenda dolore cupiditate veniam voluptate enim sit est distinctio, eaque quae ex libero ipsam reprehenderit tenetur iure. Sit suscipit tempora fugit eos, ipsum dolorem ullam eveniet dolores odit sequi, ea repellat distinctio itaque ratione placeat, voluptas cumque necessitatibus fuga ducimus est at perferendis eum! Illum incidunt dolore autem accusantium vero officiis ducimus quam sapiente dicta necessitatibus enim a iste, minima voluptates vel nobis. Explicabo aliquid, soluta fuga ad, eos asperiores et voluptates consectetur veniam hic aliquam recusandae vero neque? Distinctio consequatur impedit exercitationem numquam vel. Ut voluptatem ab tenetur! Harum labore distinctio, laboriosam nam ducimus minus. Pariatur, eum illo. Quo perferendis, eos porro iste sint tempora in quis atque? Dolor optio, dolorem molestiae a nemo at officia magni aut corrupti excepturi corporis earum officiis aspernatur neque repudiandae quae eum tempora enim. Ex in totam est deserunt alias incidunt dignissimos optio quisquam commodi qui, voluptatum quo velit et adipisci facere ducimus aperiam praesentium, dolore expedita, ratione ullam odit aliquid veritatis? Tenetur labore voluptate esse aliquam fugiat nihil magni consequatur reprehenderit, assumenda itaque atque delectus magnam eum nostrum iure dignissimos blanditiis pariatur possimus debitis iste ex a asperiores totam. Vero exercitationem est repellat deserunt autem totam illum asperiores hic magnam aperiam impedit libero ipsum consequuntur dignissimos cum corporis id ipsa dolore quibusdam quo, accusantium quos molestiae qui eligendi? Ad hic ex dicta debitis fuga perspiciatis tempora at praesentium nam et dolorum provident enim qui neque, est assumenda veniam nulla, ducimus eos, aspernatur beatae. Corporis quas omnis adipisci culpa animi ab ducimus laborum voluptas tempora repellendus, corrupti eligendi dolores labore excepturi laboriosam placeat! Ipsum odit fugit adipisci deleniti similique tempora aperiam, id magnam voluptatem ipsa aliquid, est, voluptas mollitia dolore accusantium molestiae commodi maxime maiores necessitatibus corporis hic voluptate nesciunt natus. Eos, eaque perspiciatis. Soluta, vitae ratione. Laboriosam, tempore perferendis. Facere ipsam, totam quasi alias corrupti pariatur ea impedit, debitis accusantium, fuga minima quia voluptatum obcaecati exercitationem. Alias ipsam illo aliquam officiis ipsa. Omnis facilis, minus earum iste doloremque eos consectetur quaerat eum enim error architecto labore laudantium esse atque in tempore. Consectetur cupiditate quibusdam velit vitae. Soluta, animi optio neque quibusdam saepe assumenda blanditiis laborum sunt nam quasi in nulla officia corporis ipsa excepturi ratione fuga. Temporibus, vel molestiae porro esse fugiat, et earum enim iusto commodi magni sapiente? Provident, voluptatem odio. Distinctio, aperiam nisi doloremque molestias unde ipsa. Culpa, perferendis, debitis, nam quo excepturi unde velit deserunt cum inventore optio laudantium consectetur ex et esse rerum provident reiciendis laboriosam tempora. Non, in nisi'
);{
    console.log(answer);
}