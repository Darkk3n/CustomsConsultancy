using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CustomsConsultancy.Admin.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddContactedField : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Contacted",
                table: "PotentialClients",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Contacted",
                table: "PotentialClients");
        }
    }
}
