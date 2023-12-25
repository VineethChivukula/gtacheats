// Importing the Table.css file
import "../styles/Table.css";

// Defining the Table component
const Table = ({ data, darkMode }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th
                        className="table-header"
                        style={
                            darkMode
                                ? {
                                      color: "whitesmoke",
                                      backgroundColor: "#000814",
                                  }
                                : {}
                        }
                    >
                        Cheat
                    </th>
                    <th
                        className="table-header"
                        style={
                            darkMode
                                ? {
                                      color: "whitesmoke",
                                      backgroundColor: "#000814",
                                  }
                                : {}
                        }
                    >
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index} className="table-row">
                        <td
                            className="table-cell"
                            style={
                                darkMode
                                    ? {
                                          color: "#000814",
                                          border: "1px solid #000814",
                                      }
                                    : {}
                            }
                        >
                            {item.cheat}
                        </td>
                        <td
                            className="table-cell"
                            style={
                                darkMode
                                    ? {
                                          color: "#000814",
                                          border: "1px solid #000814",
                                      }
                                    : {}
                            }
                        >
                            {item.action}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

// Exporting the Table component
export default Table;
