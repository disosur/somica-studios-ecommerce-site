import { Button } from "@/components/ui/button";

export default async function AddProductPage() {
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Add Product</h1>
      <form>
        <input
          required
          name="name"
          placeholder="Name"
          className="w-full mb-3 input-bordered input"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="w-full mb-3 textarea-bordered textarea"
        />
        <input
          required
          name="imageUrl"
          placeholder="Image URL"
          type="url"
          className="w-full mb-3 input-bordered input"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="w-full mb-3 input-bordered input"
        />
        <Button className="btn-block">Add Product</Button>
      </form>
    </div>
  );
}
