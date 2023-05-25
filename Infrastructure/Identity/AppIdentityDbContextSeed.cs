using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Rogelio",
                    Email = "rogelio.clementebl@gmail.com",
                    UserName = "rogelio.clemente",
                    Address = new Address 
                    {
                        FirstName = "Rogelio",
                        LastName = "Clemente",
                        Street = "Villas de Escobedo",
                        City = "General Escobedo",
                        State = "NL",
                        ZipCode = "66056"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}