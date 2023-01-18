export default {
    name:'certificates',
    title:'Certificates',
    type:'document',
    fields:[
           {name:'name',
               title:'name',
               type:'string'
            },
            {
                name: "certLink",
                title: "Cert Link",
                type: "string",
              },
              {
                name: "orderNum",
                title: "Order Number",
                type: "number",
              },
              {
                name: "imgUrl",
                title: "ImgUrl",
                type: "image",
                options: {
                  hotspot: true,
                },
              },
    ]
}