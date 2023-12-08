import Link from "next/link";
export async function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }]
}

const DetailPage = async ({ params }) => {
    // console.log(params);
    const res = await fetch(`http://localhost:5000/posts/${params.id}`);
    const post = await res.json();
    console.log(post);
    return (
        <div className="card bg-gray-100 shadow-xl w-[70%] my-5 mx-auto">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.description}</p>
                <p>likes: {post.like_count}</p>
                <div className="card-actions justify-end">
                    <Link href="/posts">
                        <button className="btn btn-accent">Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;