import React from "react";
import * as Styled from "./Product.styled";
import AddToCart from "./AddToCart";
function ProductExamples({ data }: any): JSX.Element {
  console.log(data.others);

  const itemsInBox = data.includes.map((component: any) => {
    return (
      <Styled.InTheBoxItem key={component.item}>
        <Styled.Quantity>
          {component.quantity}x &nbsp; &nbsp; &nbsp;
        </Styled.Quantity>
        <Styled.InTheBoxText>{component.item}</Styled.InTheBoxText>
      </Styled.InTheBoxItem>
    );
  });
  // const mayLikeItems = data.others.map((component: any) => {
  //   return (
  //     <Styled.MayLikeItem key={component.slug}>
  //       <Styled.MayLikeImage>
  //         <Styled.ProductImage
  //           src={component.image.mobile}
  //           width="327"
  //           height="120"
  //           alt={component.slug}
  //         />
  //       </Styled.MayLikeImage>
  //       <Styled.MayLikeTitle>
  //         {component.name.toUpperCase()}
  //       </Styled.MayLikeTitle>
  //       <SeeProductButton address="#" />
  //     </Styled.MayLikeItem>
  //   );
  // });
  return (
    <Styled.Product>
      <Styled.GoBack>Go Back</Styled.GoBack>
      <Styled.ProductImageWrap>
        <Styled.ProductImage
          width="327"
          height="352"
          alt={data.name}
          src={data.image.mobile}
        />
      </Styled.ProductImageWrap>
      <Styled.NewProduct>New Product</Styled.NewProduct>
      <Styled.Title> {data.name.toUpperCase()}</Styled.Title>
      <Styled.Description>{data.description}</Styled.Description>
      <Styled.Price>$ {data.price}</Styled.Price>
      <AddToCart
        price={data.price}
        name={data.name}
        pic={"/assets/cart/image-" + data.slug + ".jpg"}
      />
      <Styled.Title>FEATURES</Styled.Title>
      <Styled.Description>{data.features}</Styled.Description>
      <Styled.InTheBox>
        <Styled.Title>IN THE BOX</Styled.Title>
        <Styled.InTheBoxList>{itemsInBox}</Styled.InTheBoxList>
      </Styled.InTheBox>
      <Styled.ImageCollection>
        <Styled.ImageColSmall>
          <Styled.ProductImage
            src={data.gallery.first.mobile}
            width="327"
            height="174"
            alt="Image1"
          />
        </Styled.ImageColSmall>
        <Styled.ImageColSmall>
          <Styled.ProductImage
            src={data.gallery.second.mobile}
            width="327"
            height="174"
            alt="Image2"
          />
        </Styled.ImageColSmall>
        <Styled.ImageColLarge>
          <Styled.ProductImage
            src={data.gallery.third.mobile}
            width="327"
            height="368"
            alt="Image3"
          />
        </Styled.ImageColLarge>
      </Styled.ImageCollection>
      {/* <Styled.MayLike>
        <Styled.MayLikeTitle>YOU MAY ALSO LIKE</Styled.MayLikeTitle>
        {mayLikeItems}
      </Styled.MayLike> */}
    </Styled.Product>
  );
}

export default ProductExamples;
