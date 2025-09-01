import React from "react";
import { Html, Head, Body, Container, Text } from "@react-email/components";

export const PurchaseConfirmationEmail = ({ order }) => {
  return React.createElement(
    Html,
    null,
    React.createElement(
      Head,
      null
    ),
    React.createElement(
      Body,
      { style: { backgroundColor: "#fff", fontFamily: "Arial" } },
      React.createElement(
        Container,
        null,
        React.createElement(Text, null, `Thanks for your purchase, ${order.customerName}`),
        React.createElement(Text, null, `Order ID: ${order.id}`),
        React.createElement(Text, null, `Total: $${order.total}`)
      )
    )
  );
};
