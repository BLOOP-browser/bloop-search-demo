import axios from 'axios'


const ES_CLUSTER_HOST = 'https://bloop-demo-search.es.us-east-2.aws.elastic-cloud.com/bloop-search-demo/_search/';
const READONLY_API_KEY = 'T0QzLXNZSUIxZ2d1ZFYyYk1PaEY6MEx0T0ZtM2dSV215SExKcHlzRk54Zw=='
const ZAPIER_PUBLISH_LINK = 'https://hooks.zapier.com/hooks/catch/13135794/bl1b1jl/';
export function peformQueryRecent(responseFunction: any) {
    let query = {
        sort: [
            {timestamp: {order: "desc"}}
        ],
        query: {
            range: {
                timestamp: {
                    lt: "now/s",
                    gt: "now-7d/d",
                    format: "YYYY-MM-DD hh:mm:ss"
                }
            }
        }
    }
    performQuery(query, responseFunction)
}

export function performFuzzyQuery(searchTerm: string, responseFunction: any) {
    let query = {
        query: {
            multi_match: {
                fields: ["description" , "title"],
                query: searchTerm,
                fuzziness: "AUTO"
            }
        }
    }
    performQuery(query, responseFunction)
}

function performQuery(query: any, responseFunction: any) {
    console.log(query)
    axios.get(ES_CLUSTER_HOST, {
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "ApiKey " + READONLY_API_KEY
        },
        params: {
            size:30,
            source: JSON.stringify(query), source_content_type: 'application/json'
        },
    }).then((response) => {
        console.log(response)
        responseFunction(response)
    })
}


export function postContent(data: any, responseFunction?: any){
    let timeNow = new Date();
    axios.post(ZAPIER_PUBLISH_LINK, 
        JSON.stringify({
            description: data.description,
            timestamp: timeNow.getTime(),
            link: data.link
        })
    ).then((response) => {responseFunction(response)})
}