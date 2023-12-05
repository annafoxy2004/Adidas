import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { NOTIFY_TYPES, notify } from "../../components/alerts/Toastify";
import { useProducts } from "../../context/products/ProductsContextProvider";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";

const AddShopPage = () => {
  const { addProduct } = useProducts();
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    image: "",
    description: "",
    gender: "",
    bishkek: "",
    astana: "",
    almaty: "",
    moscow: "",
  });

  const nav = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !product.title.trim() ||
      !product.price ||
      !product.description.trim() ||
      !product.image.trim() ||
      !product.gender.trim()
    ) {
      notify("Заполните поля!", NOTIFY_TYPES.warning);
      return;
    }
    addProduct(product);
    nav("/shop");
  };

  const [gender, setGender] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
    setProduct({ ...product, gender: event.target.value as string });
  };

  const [isCheckedBishkek, setIsCheckedBishkek] = useState<boolean>(false);

  const handleCheckboxChangeBishkek = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checked = event.target.checked;
    setIsCheckedBishkek(checked);
    setProduct({ ...product, bishkek: event.target.value as string });
  };

  const [isCheckedAstana, setIsCheckedAstana] = useState<boolean>(false);

  const handleCheckboxChangeAstana = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checked = event.target.checked;
    setIsCheckedAstana(checked);
    setProduct({ ...product, astana: event.target.value as string });
  };

  const [isCheckedAlmaty, setIsCheckedAlmaty] = useState<boolean>(false);

  const handleCheckboxChangeAlmaty = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checked = event.target.checked;
    setIsCheckedAlmaty(checked);
    setProduct({ ...product, almaty: event.target.value as string });
  };

  const [isCheckedMoscow, setIsCheckedMoscow] = useState<boolean>(false);

  const handleCheckboxChangeMoscow = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checked = event.target.checked;
    setIsCheckedMoscow(checked);
    setProduct({ ...product, moscow: event.target.value as string });
  };

  return (
    <div>
      <h2>Add form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          value={product.title}
          placeholder="Title"
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
          type="text"
        />
        <FormControl fullWidth style={{ width: "100px" }}>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Gender"
            onChange={handleChange}
          >
            <MenuItem value="women">Women</MenuItem>
            <MenuItem value="men">Men</MenuItem>
          </Select>
        </FormControl>

        <FormControlLabel
          control={
            <Checkbox
              // {...label}
              defaultChecked
              color="secondary"
              checked={isCheckedBishkek}
              onChange={handleCheckboxChangeBishkek}
            />
          }
          label="Bishkek"
        />
        <FormControlLabel
          control={
            <Checkbox
              // {...label}
              defaultChecked
              color="secondary"
              checked={isCheckedAstana}
              onChange={handleCheckboxChangeAstana}
            />
          }
          label="Astana"
        />
        <FormControlLabel
          control={
            <Checkbox
              // {...label}
              defaultChecked
              color="secondary"
              checked={isCheckedAlmaty}
              onChange={handleCheckboxChangeAlmaty}
            />
          }
          label="Almaty"
        />
        <FormControlLabel
          control={
            <Checkbox
              // {...label}
              defaultChecked
              color="secondary"
              checked={isCheckedMoscow}
              onChange={handleCheckboxChangeMoscow}
            />
          }
          label="Moscow"
        />

        <input
          value={product.description}
          placeholder="Description"
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
          type="text"
        />
        <input
          value={product.image}
          placeholder="Image"
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
          type="url"
        />
        <input
          value={product.price}
          placeholder="Price"
          onChange={(e) =>
            setProduct({ ...product, price: parseInt(e.target.value) })
          }
          type="number"
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default AddShopPage;
