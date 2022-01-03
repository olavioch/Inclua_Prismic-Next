function Posts({data}){
    console.log('data', data);
    return(
        <h1>Posts</h1>
    );
}

export async function getServerSideProps(context){
    const data = [
        {name: 'lucas nhimi'},
        {name: 'lucas nhimi 2'}
    ]
    return{
        props:{data}
    }
}
export default Posts;