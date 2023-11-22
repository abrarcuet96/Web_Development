const MenuItem = ({item}) => {
    const {image, price, recipe, name}= item;
    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: '0 200px 200px 0'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase font-semibold text-orange-500">{name}</h3>
                <p className="font-semibold text-white">{recipe}</p>
            </div>
            <p className="text-orange-500 font-semibold">${price}</p>
        </div>
    );
};

export default MenuItem;