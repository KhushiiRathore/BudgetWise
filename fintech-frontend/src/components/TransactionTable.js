import React from 'react';

// TransactionTable Component
// Props:
//  - transactions: array of transaction objects
//  - onDelete: function to delete a transaction by its ID
function TransactionTable({ transactions, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          {/* Table headers */}
          <th>Type</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th> {/* ✅ New column */}
          <th>Action</th> {/* This column will have the Delete button */}
        </tr>
      </thead>
      <tbody>
        {transactions.map((t, index) => (
          // Use unique ID if available, otherwise use index
          <tr key={t._id || index}>
            <td>{t.type}</td>
            <td>₹{t.amount}</td>
            <td>{t.category}</td>
            <td>{t.date ? new Date(t.date).toLocaleDateString() : "No Date"}</td>   
            <td>
              {/* Delete button triggers onDelete with transaction ID */}
              <button
                onClick={() => onDelete(t._id)}
                style={{
                  color: 'white',
                  background: 'red',
                  border: 'none',
                  padding: '5px 10px',
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      }
      </tbody>
    </table>
  );
}

export default TransactionTable;
