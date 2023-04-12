import React, { FC } from "react";

import { CardColor, CardListType } from "src/utils/@globalTypes";
import EmptyState from "src/components/EmptyState";
import Card from "../Card";
import styles from "./CardList.module.scss";

type CardsListProps = {
  cardsList: CardListType;
};
const CardList: FC<CardsListProps> = ({ cardsList }) => {
  return cardsList.length > 0 ? (
    <div className={styles.container}>
      {cardsList.map((item) => {
        return <Card key={item.isbn13} card={item} color={CardColor.Blue} />;
      })}
    </div>
  ) : (
    <EmptyState
      title="Sorry, there's no posts"
      description="Try to check out another category"
    />
  );
};

export default CardList;
