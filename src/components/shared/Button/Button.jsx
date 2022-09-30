import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const CustomButton = styled.button`
  padding: 0.7rem 1.1rem;

  border: 2px solid ${props => props.border};
  border-radius: 0.75rem;
  font-weight: 600;
  color: ${props => props.clr};
  font-size: 0.9rem;
  transition: 200ms;
  background-color: ${props =>
    props.variant === "fill" ? props.bgClr : "transparent"};
  text-decoration: none;
  width: max-content;
  position: relative;
  z-index: 1;

  &:hover {
    background-color: ${props => props.bgClr};
    box-shadow: ${props => props.bgClr + 30} 0 0 0 6px;
  }
`

const IconButton = styled.button`
  padding: 0.312rem 0.625rem;
  border: 2px solid ${props => props.border};
  border-radius: 20px;
  font-weight: 600;
  transition: 200ms;
  background-color: ${props =>
    props.variant === "fill" ? props.bgClr : "transparent"};
  width: max-content;

  &:hover {
    background-color: ${props => props.bgClr};
    box-shadow: ${props => props.bgClr + 30} 0 0 0 6px;
  }
`

export default function Button({
  href,
  text,
  bgClr,
  variant,
  className,
  icon,
  type,
  onClick,
  clr,
  border,
}) {
  return (
    <>
      {!!href ? (
        !!icon ? (
          <IconButton
            bgClr={!!bgClr ? bgClr : "#F23B48"}
            variant={variant}
            className={!!className ? className : ""}
            type={!!type ? type : "button"}
            onClick={onClick}
          >
            <Link to={href} style={{ textDecoration: "none" }}>
              <img src={icon} alt="" className="img-fluid" />
            </Link>
          </IconButton>
        ) : (
          <Link to={href} style={{ textDecoration: "none" }}>
            <CustomButton
              bgClr={!!bgClr ? bgClr : "#F23B48"}
              variant={variant}
              className={!!className ? className : ""}
              type={!!type ? type : "button"}
              onClick={onClick}
              clr={!!clr ? clr : "#fff"}
              border={!!border ? border : "#F23B48"}
            >
              {text}
            </CustomButton>
          </Link>
        )
      ) : !!icon ? (
        <IconButton
          bgClr={!!bgClr ? bgClr : "#F23B48"}
          variant={variant}
          className={!!className ? className : ""}
          type={!!type ? type : "button"}
          onClick={onClick}
        >
          <img src={icon} alt="" className="img-fluid" />
        </IconButton>
      ) : (
        <CustomButton
          bgClr={!!bgClr ? bgClr : "#F23B48"}
          variant={variant}
          className={!!className ? className : ""}
          type={!!type ? type : "button"}
          onClick={onClick}
          clr={!!clr ? clr : "#fff"}
          border={!!border ? border : "#F23B48"}
        >
          {text}
        </CustomButton>
      )}
    </>
  )
}
