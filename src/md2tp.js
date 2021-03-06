export const md2tp = {
    keys: [
        {
            pattern:/\n(#{1,6})(.*?)\n/i,
            out:(match)=>{
                return `\n<h${match[1].length}>$2</h>\n`
            }
        }
    ]
}
export const tp2wd = {
    keys: [

    ]
}