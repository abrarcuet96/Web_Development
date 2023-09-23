import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to gym facilities",
                "Limited access to group classes",
                "Locker room access"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": 49.99,
            "features": [
                "Full access to gym facilities",
                "Unlimited access to group classes",
                "Locker room access",
                "Personal training session (1/month)",
                "Sauna and spa access"
            ]
        },
        {
            "id": 3,
            "name": "Family Membership",
            "price": 79.99,
            "features": [
                "Access to gym facilities for up to 4 family members",
                "Limited access to group classes",
                "Locker room access",
                "Discounted childcare services"
            ]
        },
        {
            "id": 4,
            "name": "Student Membership",
            "price": 24.99,
            "features": [
                "Access to gym facilities",
                "Limited access to group classes",
                "Locker room access (student ID required)",
                "Discounted healthy snack bar"
            ]
        }
    ]

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;