export const SmallProductListItem = ({product}) => {
    const {name, price} = product;

    return (
        
        <h3>Name: {name} - Price: {price}</h3>
    );
}