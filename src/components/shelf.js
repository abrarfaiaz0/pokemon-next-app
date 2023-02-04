import Card from "./card";
import styles from "@/styles/Shelf.module.css";

const Shelf = () => {
  return (
    <div className={styles.shelf}>
      <Card count="1"></Card>
      <Card count="1"></Card>
      <Card count="1"></Card>
      <Card count="1"></Card>
      <Card count="1"></Card>
      <Card count="1"></Card>
      <Card count="1"></Card>
      <Card count="1"></Card>
      <Card count="1"></Card>
      <Card count="1"></Card>
    </div>
  );
};

export default Shelf;
