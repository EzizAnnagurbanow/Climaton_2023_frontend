<script lang="ts">
	import { goto, invalidateAll } from "$app/navigation";
    const submit = async (e: SubmitEvent) => {
		e.preventDefault();
		const response = await fetch(`/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({name, password}),
		})
        if (response.ok) {
            await goto(`/`, { replaceState: true });
            invalidateAll()
        }
        else if (response.status == 401) {
            alert("Invalid credentials")
            status = "Invalid credentials"
            name = ""
            password = ""
        }
	}
    let status = " ";
	let name = "";
	let password = "";
</script>

<main>
    <div class="container">
      <div class="row mainmargin text-center">
        <form style="width: 50%; margin-left: 25%;"  on:submit={submit}>
          <h1 style="text-align: center;">Login Form</h1>

          <div class="form-group m-4">
            <label for="">Username</label>
            <input type="text" class="form-control text-center" name="" id="" aria-describedby="helpId" placeholder="" bind:value={name}>
            <!-- <small id="helpId" class="form-text text-muted">Help text</small> -->
          </div>
          <div class="form-group m-4">
            <label for="">Password</label>
            <input type="password" class="form-control text-center" name="" id="" aria-describedby="helpId" placeholder="" bind:value={password}>
            <!-- <small id="helpId" class="form-text text-muted">Help text</small> -->
          </div>
          <button type="submit" class="btn main-button mt-2">Log IN</button>
          <p class='mt-3' >No Account? <a href='Register.html'>Create account</a></p>
        </form>

        
        
      </div>
    </div>
  </main>