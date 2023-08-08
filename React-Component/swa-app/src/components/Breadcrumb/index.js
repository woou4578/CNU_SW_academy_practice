import styled from "@emotion/styled";
import BreadcrumbItem from "./BreadcrumbItem";
import React from "react";

const BreadcrumbContainer = styled.div`
	display: inline-block;
`;

const Breadcrumb = ({ children, ...props }) => {
	const items = React.Children.toArray(children)
		.filter((element) => {
			if (
				React.isValidElement(element) &&
				element.props.__TYPE === "BreadcrumbItem"
			) {
				return true;
			}

			console.log("Only accepts Breadcrumb. Item as it's children. ");
			return false;
		})
		.map((element, index, elements) => {
			return React.cloneElement(element, {
				...element.props,   
				active: index === elements.length - 1,
			});
		});

	return <BreadcrumbContainer>{items}</BreadcrumbContainer>;
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
