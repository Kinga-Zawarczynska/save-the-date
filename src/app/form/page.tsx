'use client';

export default function Form() {

  return (
    <div>
        <form>
            <label htmlFor="password">Enter Guest</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Submit</button>
        </form>
    </div>
  );
}
