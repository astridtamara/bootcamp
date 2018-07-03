import { checkPassword } from "../checkPassword";

it("should return success", () => {
  let { success, reason } = checkPassword("Kodefox");
  expect({ success, reason }).toEqual({ success: true, reason: null });
});

it("should return false and Password is shorter than 6 characters", () => {
  let { success, reason } = checkPassword("Fox");
  expect({ success, reason }).toEqual({ success: false, reason: "Password is shorter than 6 characters" });
});

it("should return false and Password has to include at least one lowercase letter", () => {
  let { success, reason } = checkPassword("KODEFOX");
  expect({ success, reason }).toEqual({
    success: false,
    reason: "Password has to include at least one lowercase letter"
  });
});

it("should return false and Password has to include at least one uppercase letter", () => {
    let { success, reason } = checkPassword("kodefox");
    expect({ success, reason }).toEqual({
      success: false,
      reason: "Password has to include at least one uppercase letter"
    });
  });

it("should return false and Password has to include at least one lowercase and uppercase letter", () => {
    let { success, reason } = checkPassword("1234567");
    expect({ success, reason }).toEqual({
      success: false,
      reason: "Password has to include at least one lowercase and uppercase letter"
    });
  });