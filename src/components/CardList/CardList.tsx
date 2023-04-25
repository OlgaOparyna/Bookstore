import React, { FC } from "react";

import { CardListType } from "src/utils/@globalTypes";
import EmptyState from "src/components/EmptyState";
import Card from "../Card";
import styles from "./CardList.module.scss";

type CardsListProps = {
  cardsList: CardListType;
};
const CardList: FC<CardsListProps> = ({ cardsList }) => {
  return cardsList ? (
    <div className={styles.container}>
      {cardsList.map((item) => {
        return <Card key={item.isbn13} card={item} />;
      })}
    </div>
  ) : (
    <EmptyState
      title="Sorry, there's no Books"
      description="Try to check out another category"
    />
  );
};

export default CardList;
