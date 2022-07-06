/* eslint-disable import/no-unresolved */

import React from "react";
import TableSuppliers from "@retailersC/TableSuppliers";

function ListSuppliers({ products }) {
  return (
    <div className="font-redHat w-4/5 m-auto">
      <table className="w-full">
        <thead className="">
          <tr className="text-left h-12">
            <th
              scope="col"
              className="bg-middleBlue/70 text-middleBlue/0 text-l uppercase"
            >
              a
            </th>
            <th scope="col" className="bg-middleBlue/70 text-l uppercase">
              Produit
            </th>
            <th scope="col" className="bg-middleBlue/70 text-l uppercase">
              Fabricant
            </th>
            <th scope="col" className="bg-middleBlue/70 text-l uppercase">
              Disponibilité
            </th>
          </tr>
        </thead>
        <tbody className="">
          {/* //   map the dataProducts for each product */}
          {products.map((product) => (
            <TableSuppliers key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListSuppliers;