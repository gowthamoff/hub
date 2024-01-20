import { Link } from 'react-router-dom';

const mainColumn = [
    {
        title: "Product Name",
        dataIndex: "name",
        key: "name",
        render: (value, record) => {
            return (
                <Link to={`/action/${record.id}`}>
                    <div style={{ display: "flex", gap: "1em" }}>
                        <span>{value}</span>
                    </div>
                </Link>
            );
        },
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
        render: (value, record) => {
            return (
                <Link to={`/action/${record.id}`}>
                    <div style={{ display: "flex", gap: "1em" }}>
                        <span>{value}</span>
                    </div>
                </Link>
            );
        },
    },
    {
        title: "Quantity",
        dataIndex: "quantity",
        key: "quantity",
        render: (value, record) => {
            return (
                <Link to={`/action/${record.id}`}>
                    <div style={{ display: "flex", gap: "1em" }}>
                        <span>{value}</span>
                    </div>
                </Link>
            );
        },
    },
]; 

export default mainColumn