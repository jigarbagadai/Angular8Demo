using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Assignment.UserPreference.Api.Model;
using Assignment.UserPreference.DataAccess.Entity;
using Assignment.UserPreference.DataAccess.GenericRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Assignment.UserPreference.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserDetailController : ControllerBase
    {
        private IDbRepository<UserDetail> repository;

        public UserDetailController(IDbRepository<UserDetail> repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public ApiResponse GetAll()
        {
            List<UserDetail> userDetails = this.repository.Get().ToList();
            ApiResponse apiResponse = new ApiResponse();
            apiResponse.Data = userDetails;
            return apiResponse;
        }

        [HttpGet("{id}")]
        public ApiResponse Get(int id)
        {
            ApiResponse apiResponse = new ApiResponse();
            UserDetail userDetail = this.repository.Get(id);
            apiResponse.Data = userDetail;
            return apiResponse;
        }

        [HttpPost]
        public virtual async Task<ApiResponse> Create([FromBody] UserDetail record)
        {
            ApiResponse apiResponse = new ApiResponse();
            repository.Create(record);
            if (await repository.SaveAsync() == 0)
            {
                apiResponse.ApiStatus = Status.Failed;
                apiResponse.Message = "Error Occured while executing request";
            }

            return apiResponse;
        }

        [HttpPut("{id}")]
        public virtual async Task<ApiResponse> Update(int id, [FromBody] UserDetail record)
        {
            ApiResponse apiResponse = new ApiResponse();
            if (id != record.Id)
            {
                apiResponse.ApiStatus = Status.Failed;
                apiResponse.Message = "Error Occured while executing request";
            }

            repository.Update(record);
            if (await repository.SaveAsync() == 0)
            {
                apiResponse.ApiStatus = Status.Failed;
                apiResponse.Message = "Error Occured while executing request";
            }

            return apiResponse;
        }

        [HttpDelete("{id}")]
        public virtual async Task<ApiResponse> Delete(int id)
        {
            ApiResponse apiResponse = new ApiResponse();
            repository.Delete(id);
            if (await repository.SaveAsync() == 0)
            {
                apiResponse.ApiStatus = Status.Failed;
                apiResponse.Message = "Error Occured while executing request";
            }

            return apiResponse;
        }
    }
}